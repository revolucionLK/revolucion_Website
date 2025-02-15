import SalesChart from '../../components/dashboard/charts/SalesChart';
import LeadsChart from '../../components/dashboard/charts/LeadsChart';
import RecentCustomers from '../../components/dashboard/tables/RecentCustomers';
import RecentActivities from '../../components/dashboard/tables/RecentActivities';
import StatsCard from '../../components/dashboard/cards/StatsCard';
import AIInsightCard from '../../components/dashboard/cards/AIInsightCard';
import { Users, Target, TrendingUp, MessageSquare } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Total Customers"
          value="1,234"
          change="+12%"
          icon={Users}
          trend="up"
        />
        <StatsCard
          title="New Leads"
          value="89"
          change="+5%"
          icon={Target}
          trend="up"
        />
        <StatsCard
          title="Sales Revenue"
          value="$45,678"
          change="+8%"
          icon={TrendingUp}
          trend="up"
        />
        <StatsCard
          title="Active Chats"
          value="23"
          change="+15%"
          icon={MessageSquare}
          trend="up"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black/90 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Sales Overview</h3>
          <SalesChart />
        </div>
        <div className="bg-black/90 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Lead Conversion</h3>
          <LeadsChart />
        </div>
      </div>

      {/* AI Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AIInsightCard
          title="Customer Behavior"
          insight="80% of your premium customers are most active during morning hours."
          recommendation="Schedule important communications between 9 AM and 11 AM."
        />
        <AIInsightCard
          title="Sales Prediction"
          insight="Expected 25% growth in Q4 based on current trends."
          recommendation="Increase inventory for top-selling products."
        />
        <AIInsightCard
          title="Churn Risk"
          insight="12 customers showing signs of decreased engagement."
          recommendation="Initiate personalized re-engagement campaign."
        />
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentCustomers />
        <RecentActivities />
      </div>
    </div>
  );
};

export default Home; 