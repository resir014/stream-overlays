import { DashboardSidebar } from '~/components/dashboard';
import { DashboardPageContent, DashboardPageHeader } from '~/components/dashboard/page';
import { DashboardSection, DashboardSectionHeader } from '~/components/dashboard/section';
import { LinkList } from '~/components/link-list';
import { DashboardLayout } from '~/layouts/dashbard-layout';
import { blocks, overlays, scenes } from '~/lib/data/dashboard';

export default function IndexPage() {
  return (
    <DashboardLayout>
      <section className="flex h-[calc(100vh-60px)]">
        <DashboardSidebar />
        <div className="flex flex-col flex-auto">
          <DashboardPageHeader title="Home" />
          <DashboardPageContent>
            <div className="space-y-8">
              <DashboardSection>
                <DashboardSectionHeader>Scenes</DashboardSectionHeader>
                <LinkList items={scenes} />
              </DashboardSection>
              <DashboardSection>
                <DashboardSectionHeader>Overlays</DashboardSectionHeader>
                <LinkList items={overlays} />
              </DashboardSection>
              <DashboardSection>
                <DashboardSectionHeader>Blocks</DashboardSectionHeader>
                <LinkList items={blocks} />
              </DashboardSection>
            </div>
          </DashboardPageContent>
        </div>
      </section>
    </DashboardLayout>
  );
}
