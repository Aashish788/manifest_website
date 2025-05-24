import { useState } from 'react';

const PricingPlans = () => {
  const [billingInterval, setBillingInterval] = useState('monthly');

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
      {/* Billing toggle */}
      <div className="flex justify-center">
        <div className="flex space-x-4 rounded-full p-1 bg-gray-100">
          <button
            className={`px-4 py-2 text-sm font-semibold ${billingInterval === 'monthly' ? 'bg-black text-white rounded-full' : 'text-gray-700'}`}
            onClick={() => setBillingInterval('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 text-sm font-semibold ${billingInterval === 'annually' ? 'bg-black text-white rounded-full' : 'text-gray-700'}`}
            onClick={() => setBillingInterval('annually')}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="rounded-2xl border border-gray-200 p-8">
          <h3 className="text-2xl font-medium text-gray-900">Free</h3>
          <p className="mt-2 flex items-baseline text-gray-900">
            <span className="text-4xl font-medium tracking-tight">$0</span>
            <span className="text-sm font-semibold text-gray-500">/mo</span>
          </p>
          <p className="mt-6 text-base text-gray-600">
            Get a taste for how Cluely works with a few responses on us.
          </p>

          <a href="https://github.com/cluely/releases/releases/latest/download/cluely.dmg"
             className="mt-8 block w-full rounded-full bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            Download for Mac
          </a>

          <ul className="mt-8 space-y-4 text-sm text-gray-600">
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              5 pro responses per day
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <div>
                Unlimited access to free models
                <span className="ml-2 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">GPT-4.0-mini</span>
              </div>
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              100 character output limit
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Sees your screen, hears your audio
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Custom system prompt
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Community support only
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="rounded-2xl border border-gray-200 p-8">
          <h3 className="text-2xl font-medium text-gray-900">Pro</h3>
          <p className="mt-2 flex items-baseline text-gray-900">
            <span className="text-4xl font-medium tracking-tight">$20</span>
            <span className="text-sm font-semibold text-gray-500">/mo</span>
          </p>
          <p className="mt-6 text-base text-gray-600">
            Unlimited access to Cluely. Use the latest models, get full response output, and play with your own custom prompts.
          </p>

          <button
             className="mt-8 block w-full rounded-full bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            Subscribe
          </button>

          <ul className="mt-8 space-y-4 text-sm text-gray-600">
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Unlimited pro responses
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <div>
                Unlimited access to latest models
                <span className="ml-2 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">Claude-3.7</span>
                <span className="ml-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">GPT-4.1</span>
              </div>
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Full access to conversations dashboard
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Priority support
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Plus everything in free
            </li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="rounded-2xl border border-gray-200 bg-black text-white p-8">
          <h3 className="text-2xl font-medium">Enterprise</h3>
          <p className="mt-2 flex items-baseline">
            <span className="text-4xl font-medium tracking-tight">Custom</span>
          </p>
          <p className="mt-6 text-base text-gray-300">
            Specifically made for teams who need full customization.
          </p>

          <button
             className="mt-8 block w-full rounded-full bg-gray-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
            Talk to Sales
          </button>

          <ul className="mt-8 space-y-4 text-sm text-gray-300">
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <div>
                Custom integrations
                <span className="ml-2 rounded-full bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-600/20">Coming soon</span>
              </div>
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              User provisioning & role-based access
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Advanced Post-call analytics
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <div>
                Single sign-on
                <span className="ml-2 rounded-full bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-600/20">IDP/SSO</span>
              </div>
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Advanced security features
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Centralized billing
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Usage analytics & reporting dashboard
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Plus Everything in pro
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
