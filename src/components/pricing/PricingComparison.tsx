const PricingComparison = () => {
  const features = [
    {
      category: 'Features',
      items: [
        { name: 'Custom system prompt', free: true, pro: true, enterprise: true },
        { name: 'Pro Responses / day', free: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
        { name: 'Token limit', free: '100', pro: 'Unlimited', enterprise: 'Unlimited' },
        { name: 'Model', free: 'GPT-4.0-mini', pro: 'GPT-4.1, Claude-3.7', enterprise: 'GPT-Enterprise' },
        { name: 'Single sign-on (IDP)', free: false, pro: false, enterprise: true }
      ]
    },
    {
      category: 'Platform',
      items: [
        { name: 'Conversations dashboard', free: false, pro: true, enterprise: true },
        { name: 'Advanced analytics', free: false, pro: false, enterprise: true },
        { name: 'Centralized billing', free: false, pro: false, enterprise: true },
        { name: 'Custom integrations (coming soon)', free: false, pro: false, enterprise: true },
        { name: 'User provisioning & role-based access', free: false, pro: false, enterprise: true }
      ]
    },
    {
      category: 'Support',
      items: [
        { name: 'Community support', free: true, pro: true, enterprise: true },
        { name: 'Priority support', free: false, pro: true, enterprise: true },
        { name: 'Customized onboarding', free: false, pro: false, enterprise: true }
      ]
    }
  ];

  const renderCheckmark = () => (
    <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );

  const renderDash = () => (
    <div className="h-5 w-5 flex items-center justify-center text-gray-500">
      <div className="h-0.5 w-3 bg-gray-300 rounded" />
    </div>
  );

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-medium leading-8 text-gray-900">
            Pricing plan comparison
          </h2>
        </div>
        <div className="mt-16 flow-root">
          <div className="isolate -mt-16 grid grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mt-0 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:divide-x sm:divide-y-0 lg:gap-x-8">
            <div className="pt-16 sm:px-6 sm:pt-0 lg:px-8">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Free plan</h3>
            </div>
            <div className="pt-16 sm:px-6 sm:pt-0 lg:px-8">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Pro plan</h3>
            </div>
            <div className="pt-16 sm:px-6 sm:pt-0 lg:px-8">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Enterprise plan</h3>
            </div>
          </div>

          {features.map((category) => (
            <div key={category.category} className="mt-8">
              <h4 className="text-sm font-semibold leading-6 text-gray-900">{category.category}</h4>
              <div className="-mx-6 mt-4 grid grid-cols-1 sm:grid-cols-3">
                <ul className="space-y-6 px-6 sm:space-y-3">
                  {category.items.map((feature) => (
                    <li key={feature.name} className="text-sm leading-6 text-gray-900">
                      {feature.name}
                    </li>
                  ))}
                </ul>

                <ul className="space-y-6 px-6 sm:space-y-3">
                  {category.items.map((feature) => (
                    <li key={feature.name} className="text-sm leading-6 text-gray-500 text-center">
                      {typeof feature.free === 'boolean' ? (
                        feature.free ? renderCheckmark() : renderDash()
                      ) : (
                        <span className="text-gray-700">{feature.free}</span>
                      )}
                    </li>
                  ))}
                </ul>

                <ul className="space-y-6 px-6 sm:space-y-3">
                  {category.items.map((feature) => (
                    <li key={feature.name} className="text-sm leading-6 text-gray-500 text-center">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? renderCheckmark() : renderDash()
                      ) : (
                        <span className="text-gray-700">{feature.pro}</span>
                      )}
                    </li>
                  ))}
                </ul>

                <ul className="space-y-6 px-6 sm:space-y-3">
                  {category.items.map((feature) => (
                    <li key={feature.name} className="text-sm leading-6 text-gray-500 text-center">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? renderCheckmark() : renderDash()
                      ) : (
                        <span className="text-gray-700">{feature.enterprise}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComparison;
