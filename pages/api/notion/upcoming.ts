import { NextApiHandler } from 'next';
import { notion } from '~/lib/notion';
import { parseNumber, parseString } from '~/lib/query-parser';

// Gets the all upcoming streams based on the reference date/time.
//
// GET `/api/notion/upcoming`
//
// Query parameters:
// - `reference_date`: an ISO 8601 compliant date/time string used for the `after`
//   filter on the Notion API. Defaults to current date/time.
// - `page_size`: maximum data rendered per API request. Defaults to `3`.

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      if (process.env.NOTION_DATABASE_ID) {
        const { reference_date, page_size } = req.query;
        const parsedDate = parseString(reference_date);
        const parsedPageSize = parseNumber(page_size);

        const { results } = await notion.databases.query({
          database_id: process.env.NOTION_DATABASE_ID,
          filter: {
            property: 'Date',
            date: {
              after: parsedDate ? new Date(parsedDate).toISOString() : new Date().toISOString(),
            },
          },
          sorts: [
            {
              property: 'Date',
              direction: 'ascending',
            },
          ],
          page_size: parsedPageSize ?? 3,
        });

        const data = results.map(({ id, properties }) => {
          console.log(JSON.stringify({ id, properties }, null, 2));
          return {
            id,
            date: properties.Date.type === 'date' ? properties.Date.date.start : undefined,
            series:
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              properties.Series.type === 'select' ? properties.Series.select?.name : undefined,
            category:
              properties.Category.type === 'multi_select'
                ? properties.Category.multi_select.map(select => select.name)
                : undefined,
            stream_name:
              properties['Stream Name'].type === 'title'
                ? properties['Stream Name'].title[0]?.type === 'text'
                  ? properties['Stream Name'].title[0]?.text.content
                  : undefined
                : undefined,
            description:
              properties.Description.type === 'rich_text'
                ? properties.Description.rich_text[0]?.type === 'text'
                  ? properties.Description.rich_text[0]?.text.content
                  : undefined
                : undefined,
          };
        });

        res.status(200).json({
          status: 'ok',
          data,
        });
      } else {
        throw new Error('No database ID provided.');
      }
    } else {
      res.status(404).json({
        status: 'error',
        data: {
          message: 'Page not found.',
        },
      });
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({
        status: 'error',
        data: {
          message: err.message,
        },
      });
    } else {
      res.status(400).json({
        status: 'error',
        data: {
          message: 'An unknown error occured.',
        },
      });
    }
  }
};

export default handler;
