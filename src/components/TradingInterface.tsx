import { useState } from "react";
import { Star } from "lucide-react";
import DropDown from "./DropDown";
import Slider from "./Slider";

const TradingInterface = () => {
  const [activeTab, setActiveTab] = useState("BUY/LONG");
  const [activeOrderTab, setActiveOrderTab] = useState("OPEN ORDERS");
  const [hideOtherPairs, setHideOtherPairs] = useState(false);

  const orderBookData = [
    { price: "38¢", shares: "14,984.00" },
    { price: "37¢", shares: "14,984.00" },
    { price: "36¢", shares: "14,984.00" },
    { price: "35.5¢", shares: "14,984.00" },
    { price: "35¢", shares: "14,984.00" },
    { price: "34.5¢", shares: "14,984.00", current: true },
    { price: "34¢", shares: "14,984.00" },
    { price: "33.5¢", shares: "14,984.00" },
    { price: "33.4¢", shares: "14,984.00" },
    { price: "32¢", shares: "14,984.00" },
    { price: "30¢", shares: "14,984.00" },
  ];

  return (
    <div className="max-w-[420px] mx-auto bg-white pb-16">
      <div className="flex items-center justify-between p-4 border-b border-[#E9E9E9] bg-white">
        <img src="/logo.svg" />
        <div className="flex items-center space-x-4">
          <Star className="w-5 h-5" color="#1E1E1E" />
          <img src="/bell.svg" />
        </div>
      </div>

      <div className="px-4 py-3 pb-4">
        <div className="flex items-center justify-between mb-3">
          <img src="/CSK-Logo.svg" className="mr-2" />
          <div>
            <h2 className="font-semibold text-[#000000] text-lg">
              Chennai Super Kings
            </h2>
            <p className="text-xs leading-none text-[#8F8F8F]">+65.2M Vol.</p>
          </div>
          <div className="ml-auto flex items-center space-x-2">
            <div className="text-right">
              <h2 className="text-lg font-semibold text-[#000000]">34¢</h2>
              <p className="text-[#06A900] leading-none text-xs font-medium">
                +0.84%
              </p>
            </div>
            <img src="/tradingUp.svg" className="w-[18px]" />
          </div>
        </div>
      </div>

      <div className="px-4 flex gap-3 sm:gap-5">
        <div className="flex-1">
          <div className="flex mb-4 border border-[#E9E9E9] rounded-[4px] p-[1px] bg-[#F5F5F5]">
            <button
              onClick={() => setActiveTab("BUY/LONG")}
              className={`flex-1 py-1.5 sm:py-2 text-[13px] sm:text-sm font-medium rounded-[5px] ${
                activeTab === "BUY/LONG"
                  ? "bg-[#2B2B2B] text-[#EAEAEA]"
                  : "bg-[#F5F5F5] text-[#00000080]"
              }`}
            >
              BUY/LONG
            </button>
            <button
              onClick={() => setActiveTab("SELL/SHORT")}
              className={`flex-1 py-1.5 sm:py-2  text-[13px] sm:text-sm font-medium rounded-[5px] ${
                activeTab === "SELL/SHORT"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              SELL/SHORT
            </button>
          </div>

          <div className="mb-2.5">
            <DropDown
              defaultValue="Limit"
              options={["5 items", "15 items", "30 items"]}
              onSelect={(value) => console.log("Selected:", value)}
            />
          </div>

          <div className="mb-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[#000000] underline leading-none">
                Available to Trade
              </span>
              <span className="text-sm font-medium text-[#000000]">
                0.00 USDC
              </span>
            </div>
          </div>

          <div className="px-4 py-2 rounded bg-[#F5F5F5] border border-[#E9E9E9]">
            <div className="flex justify-between items-center">
              {/* <label className="">
                Price (USD)
              </label> */}
              <input
                placeholder="Price (USD)"
                className="text-xs font-medium text-[#000000] bg-transparent outline-none placeholder-[#00000080]"
              />
              <p className="text-xs font-medium text-[#000000]">
                34.5 <span className="underline text-[#000000]">Mid</span>
              </p>
            </div>
          </div>

          <div className="px-4 mt-2.5 py-2 rounded bg-[#F5F5F5] border border-[#E9E9E9]">
            <div className="flex justify-between items-center">
              <input
                placeholder="Shares"
                className="text-xs font-medium text-[#000000] bg-transparent outline-none placeholder-[#00000080]"
              />
              <p className="text-xs font-medium text-[#00000066]">0</p>
            </div>
          </div>

          <div className="mb-3.5 mt-2.5">
            <Slider />
          </div>

          <div className="h-1 w-full bg-[#ECECEC]"></div>

          <div className="space-y-2 mb-3 mt-2.5">
            <div className="flex justify-between text-[#000000] text-sm  font-medium">
              <span className="text-[#000000]">Order Total</span>
              <span className="text-[#000000] font-medium">$0</span>
            </div>
            <div className="flex justify-between text-[#000000] text-sm  font-medium">
              <span className="text-[#000000]">To Win 💵</span>
              <span className="text-[#000000]">$0</span>
            </div>
          </div>

          <button className="w-full bg-[#2B2B2B] text-[#FFFFFF] py-2.5 rounded font-semibold text-xs">
            BUY/LONG CSK
          </button>
        </div>

        <div className="flex-1">
          <div className="bg-white">
            <div className="grid grid-cols-2 gap-1 sm:gap-4 text-xs font-medium pb-1.5">
              <span className="text-[#000000B2] text-xs">Price</span>
              <span className="text-right text-nowrap text-[#000000B2] text-xs">
                Shares{" "}
                <span className="text-[#000000B2] hidden sm:block">(CSK)</span>
              </span>
            </div>

            <div className="space-y-[3px]">
              {orderBookData.map((item, index) => {
                const middleIndex = Math.floor(orderBookData.length / 2);
                const isUpperHalf = index < middleIndex;
                const isMiddle = index === middleIndex;

                let percentage, bgColor;

                if (isUpperHalf) {
                  const stepsFromTop = index;
                  percentage = 100 - stepsFromTop * 10;
                  bgColor = "#A900221A";
                } else if (isMiddle) {
                  percentage = 50;
                  bgColor = "#FFFFFF";
                } else {
                  const stepsFromMiddle = index - middleIndex;
                  percentage = stepsFromMiddle * 10;
                  bgColor = "#06A9001A";
                }
                return (
                  <div
                    key={index}
                    className={`flex justify-between items-center gap-4 ${
                      isMiddle ? "py-1.5" : "py-1"
                    }`}
                    style={{
                      background: `linear-gradient(to right, ${bgColor} ${percentage}%, transparent ${percentage}%)`,
                    }}
                  >
                    <span
                      className={`${
                        isMiddle
                          ? "text-sm font-medium text-[#000000]"
                          : "text-xs font-medium text-[#00000099]"
                      }`}
                    >
                      {item.price}
                    </span>

                    {isMiddle ? (
                      <span className="text-[10px] font-medium text-[#000000]">
                        (Spread 1%)
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-[#00000099]">
                        {item.shares}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-6">
        <div className="px-4 gap-4 flex border-b border-t border-[#E9E9E9] mb-4">
          {["OPEN ORDERS", "POSITIONS", "TRADE HISTORY"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveOrderTab(tab)}
              className={`py-2 tracking-[1%] capitalize text-xs font-medium ${
                activeOrderTab === tab ? "text-[#000000]" : "text-[#00000066]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center px-4 justify-between mb-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={hideOtherPairs}
              onChange={(e) => setHideOtherPairs(e.target.checked)}
              className="w-[18px] h-[18px] rounded border-[#858585] border outline-none focus:border-[#858585]"
            />
            <span className="text-sm font-medium text-[#858585]">
              Hide Other Pairs
            </span>
          </div>
          <button className="text-sm bg-[#EAEAEA] text-[#000000] px-2.5 py-1.5 rounded leading-none">
            Cancel All
          </button>
        </div>

        <div className="px-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="font-medium text-sm text-[#000000]">
                CSK / IPL Winner
              </div>
              <div className="text-xs text-[#858585] text-[10px]">
                <span className="text-[#56AB68]">Limit buy </span> 0.00 USDC
                14:37:23
              </div>
            </div>
            <div className="text-right items-center flex gap-2">
              <div className="flex flex-col items-center">
                <div className="font-medium text-[#000000] text-xs">0%</div>
                <div className="w-9 h-1 bg-[#E8DEF8] rounded-sm"></div>
              </div>

              <button className="text-sm bg-[#EAEAEA] text-[#000000] px-2.5 py-1.5 rounded leading-none">
                Cancel
              </button>
            </div>
          </div>

          <div className="space-y-1 text-[10px]">
            <div className="flex justify-between">
              <span className="text-[#3B3B3B] ">Filled / Amount</span>
              <span className="text-[#000000]">
                0.00 /<span className="text-[#858585]"> 0.01</span>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#3B3B3B]">Price</span>
              <span className="text-[#000000]">30¢</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[420px] bg-white border-t border-gray-200">
        <div className="flex justify-around py-1.5  font-medium">
          <div className="flex flex-col items-center py-2">
            <img src="/markets.svg" />
            <span className="text-sm text-[#858585] mt-0.5">Markets</span>
          </div>
          <div className="flex flex-col items-center py-2 relative">
            <img src="/trade.svg" />{" "}
            <span className="text-sm text-gray-900 mt-0.5">Trade</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <img src="/wallet.svg" />{" "}
            <span className="text-sm text-[#858585] mt-0.5">$30.8</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <img src="/more.svg" />{" "}
            <span className="text-sm text-[#858585] mt-0.5">More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingInterface;
