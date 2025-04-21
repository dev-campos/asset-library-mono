'use client';

import SearchBar from '@/components/SearchBar';
import CategoryTabs from '@/components/CategoryTabs';
import AssetList from '@/components/AssetList';
import TrendingList from '@/components/TrendingList';

// TODO: Asset exploration functionality:
// - Shows up twice in diagram (blue/interactive)
// - No wireframe provided for:
//   - How exploration view looks
//   - How it relates to current asset display
//   - Navigation between explore states
//   - Relationship with filtered view

// TODO: Additional assets section:
// - Shows in diagram under expanded asset section
// - No wireframe provided for:
//   - How additional assets are displayed
//   - How they relate to main asset list
//   - Whether they're part of exploration flow
//   - How they're accessed/navigated

const Page = () => {

  return (
    <section className="px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <div className="relative mb-6">
          <h1 className="text-center text-4xl font-semibold tracking-tight text-gray-900">
            Library
          </h1>
        </div>

        <p className="text-center text-sm text-gray-500 mb-8">
          Browse for assets needed to report and present analysis
        </p>

        <div className="mb-8">
          <SearchBar />
        </div>

        <div>
          <CategoryTabs />
        </div>

        <div className="mt-8">
          <AssetList />
        </div>

        <div className="mt-12">
          <TrendingList />
        </div>
      </div>
    </section>
  );
};

export default Page;
