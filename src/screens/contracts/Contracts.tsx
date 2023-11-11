import { FC, useState } from "react";
import { ContractsData, Contracts } from "./ContractsData";
import Button from "../../components/allcontracts/Buttons";

const Contracts: FC = () => {
  const [selectedContract, setSelectedContract] = useState<Contracts | null>(
    ContractsData[0]
  );

  const handleTabClick = (contract: Contracts) => {
    setSelectedContract(contract);
  };

  return (
    <div>
      <main className="flex flex-col ">
        <div className="flex max-w-[760px] w-[90%] border border-[#CACFDC] rounded-lg shadow p-4">
          {ContractsData.map((contract, index) => (
            <div
              key={index}
              className={`cursor-pointer ${
                selectedContract === contract
                  ? "bg-[#EBF1FF] text-[#042268] font-medium rounded py-2 px-4"
                  : " rounded-[10px] text-black  py-1 px-2"
              }`}
              onClick={() => handleTabClick(contract)}
            >
              {contract.name}
            </div>
          ))}
        </div>

        {selectedContract && (
          <div className="">
            <div className="flex flex-col gap-8">
              {selectedContract.professions.map((profession, index) => (
                <div
                  key={index}
                  className="border border-[#CACFDC] rounded py-6  px-8  w-full max-w-[760px] bg-[#fbfcff] "
                >
                  <div className="pb-2">
                    <p className="text-[#042268] font-[500] text-[16px] lg:text-[18px]">
                      {profession.name}
                    </p>
                  </div>

                  <div className="flex gap-10">
                    <div className="text-black font-[500] text-[16px] lg:text-[18px]">
                      {profession.person}
                    </div>
                    <div>
                      <p className="rounded-full bg-[#BFEED7] py-2 px-3 font-medium text-[#56AA83] text-center">
                        {profession.available}
                      </p>
                      <span className="text-sm text-gray-500">No recorded time yet</span>
                    </div>
                    <div>
                      <p>{profession.hour}</p>
                    </div>
                    <div>
                      <p>{profession.week}</p>
                    </div>
                    <Button text="Submit work for Payment"/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Contracts;
