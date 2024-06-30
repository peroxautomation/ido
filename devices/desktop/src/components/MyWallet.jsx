import SizeSmallStatePrimaryDev from "./SizeSmallStatePrimaryDev";

const MyWallet = (props) => {
  const {
    className = "",
    openTopUpModal,
    openWithdrawModal,
    openShowHistoryModal,
  } = props;
  return (
    <div
      className={`self-stretch rounded-2xl bg-neutral-800 flex flex-row items-start justify-between p-6 text-left text-9xl text-neutral-100 font-overline-regular ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <div className="relative leading-[36px]">My wallet</div>
        <div className="flex flex-col items-start justify-start gap-[5px] text-center text-base text-neutral-500">
          <div className="relative leading-[24px] font-semibold">Balance</div>
          <div className="relative text-21xl leading-[48px] font-semibold text-neutral-100 text-left">
            $ 132,74
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-start gap-[24px]">
        <SizeSmallStatePrimaryDev
          text="Show history"
          hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus.svg"
          rightIcon={false}
          sizeSmallStatePrimaryDevBackgroundColor="unset"
          sizeSmallStatePrimaryDevWidth="252px"
          sizeSmallStatePrimaryDevPosition="unset"
          sizeSmallStatePrimaryDevRight="unset"
          sizeSmallStatePrimaryDevBottom="unset"
          sizeSmallStatePrimaryDevLeft="unset"
          cTAColor="#fff"
          onClick={openShowHistoryModal}
        />
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <SizeSmallStatePrimaryDev
            text="Top up"
            hugeIconinterfacesolidplu="/hugeiconinterfacesolidplus1.svg"
            rightIcon
            sizeSmallStatePrimaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
            sizeSmallStatePrimaryDevWidth="252px"
            sizeSmallStatePrimaryDevPosition="unset"
            sizeSmallStatePrimaryDevRight="unset"
            sizeSmallStatePrimaryDevBottom="unset"
            sizeSmallStatePrimaryDevLeft="unset"
            cTAColor="#fff"
            onClick={openTopUpModal}
          />
          <SizeSmallStatePrimaryDev
            text="Withdraw"
            hugeIconinterfacesolidplu="/hugeiconarrowssolidmaximize@2x.png"
            rightIcon
            sizeSmallStatePrimaryDevBackgroundColor="rgba(255, 255, 255, 0.08)"
            sizeSmallStatePrimaryDevWidth="252px"
            sizeSmallStatePrimaryDevPosition="unset"
            sizeSmallStatePrimaryDevRight="unset"
            sizeSmallStatePrimaryDevBottom="unset"
            sizeSmallStatePrimaryDevLeft="unset"
            cTAColor="#fff"
            onClick={openWithdrawModal}
          />
        </div>
      </div>
    </div>
  );
};

export default MyWallet;
