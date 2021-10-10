import { NextApiHandler } from 'next';
import { notion } from '~/lib/notion';

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method === 'GET') {
      if (process.env.NOTION_DATABASE_ID) {
        const { results } = await notion.databases.query({
          database_id: process.env.NOTION_DATABASE_ID,
          filter: {
            property: 'Current Stream',
            checkbox: {
              equals: true,
            },
          },
          sorts: [
            {
              property: 'Date',
              direction: 'descending',
            },
          ],
          page_size: 1,
        });

        if (results.length > 0) {
          const currentStream = results.map(({ id, properties }) => ({
            id,
            date: properties.Date.type === 'date' ? properties.Date.date.start : undefined,
            series: properties.Series.type === 'select' ? properties.Series.select.name : undefined,
            category:
              properties.Category.type === 'multi_select'
                ? properties.Category.multi_select.map(select => select.name)
                : undefined,
            stream_name:
              properties['Stream Name'].type === 'title'
                ? properties['Stream Name'].title[0].type === 'text'
                  ? properties['Stream Name'].title[0].text.content
                  : undefined
                : undefined,
            description:
              properties.Description.type === 'rich_text'
                ? properties.Description.rich_text[0].type === 'text'
                  ? properties.Description.rich_text[0].text.content
                  : undefined
                : undefined,
          }));

          res.status(200).json({
            status: 'ok',
            data: currentStream[0],
          });
        } else {
          res.status(404).json({
            status: 'error',
            data: {
              message: 'No stream scheduled.',
            },
          });
        }
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
