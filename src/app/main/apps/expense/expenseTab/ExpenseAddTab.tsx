import FusePageSimple from "@fuse/core/FusePageSimple";
import { styled } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import ExpenseItemAdd from "../ExpenseAdd/ExpenseItemAdd";
import ExpenseImageCard from "../ExpenseCard/ExpenseImageCard";
import ExpenseItemCard from "../ExpenseCard/ExpenseItemCard";
import { useParams } from "react-router-dom";
import ExpenseItemAddCard from "../ExpenseCard/ExpenseItemAddCard";
import ExpenseImageAddWebCard from "../ExpenseCard/ExpenseImageAddWebCard";
import ExpenseImageAddMobileCard from "../ExpenseCard/ExpenseImageAddMobileCard";

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-content": {
    display: "inline",
  },
  "& .FusePageSimple-sidebarContent": {
    width: 640,
    height: "100% !important",
  },
}));

function ExpenseAddTab() {
  const routeParams = useParams();
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const pageLayout = useRef(null);

  useEffect(() => {
    setRightSidebarOpen(Boolean(routeParams.id));
  }, [routeParams]);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      {/* 日付 */}
      <div className="h-full px-128">
        <span className="flex w-full justify-center items-center">
          <h1 className="text-black text-3xl font-semibold">2024年 06月</h1>
        </span>
        <div className="flex w-full h-22 m-auto py-6 justify-center items-center rounded-lg bg-[#157B3E] text-white text-xl font-semibold">
          <div className="">承認待ち</div>
        </div>
      </div>

      {/* 経費請求 content */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-16 min-w-640">
          {/* Left Content : 申請項目 */}
          <div>
            <div className="flex justify-between text-left text-[#767677] font-bold ml-16 mr-20 mt-32 mb-8">
              <span>申請項目</span>
              {/* 経費請求の合計 */}
              <span>￥7,000</span>
            </div>
            <div className="flex flex-col space-y-2">
              {/* 項目のBox -> Component A >> app-employee-expense-card */}
              <ExpenseItemCard />

              {/* 項目の追加のBox -> Component A */}
              <Root
                content={<ExpenseItemAddCard />}
                ref={pageLayout}
                rightSidebarContent={<ExpenseItemAdd />}
                rightSidebarOpen={rightSidebarOpen}
                rightSidebarOnClose={() => setRightSidebarOpen(false)}
                rightSidebarWidth={640}
                rightSidebarVariant="temporary"
                // scroll={isMobile ? 'normal' : 'content'}
              />
            </div>
          </div>

          {/* Right Content : 領収書添付 */}
          <div>
            <div className="text-left text-[#767677] font-bold ml-16 mt-48 md:mt-32 mb-8">
              領収書添付
            </div>
            <div className="flex flex-col space-y-8">
              {/* 領収書のBox -> Component B >> app-employee-expense-image-card */}
              <ExpenseImageCard />

              {/* 領収書の追加のBox -> Component B */}
              {/* 領収書添付の方法 : CameraとGallery */}
              <ExpenseImageAddWebCard />
              <ExpenseImageAddMobileCard />
              {/* <input
                            #cameraInput
                            type="file"
                            accept="image/*"
          (change)="handleFileInput($event)"
                        className="hidden"
                        capture
        />
                        <input
                            #galleryInput
                            type="file"
                            accept="image/*"
          (change)="handleFileInput($event)"
                        className="hidden"
        /> */}
            </div>
          </div>
        </div>
      </div>

      {/* 下のコードは何の機能？ */}
      {/* <button
    mat-raised-button
    color="primary"
    class="mt-8 w-36"
    (click)="onClickPatchUserExpenseApprove()"
    [disabled]="approveButtonIsDisabled"
    *ngIf="!isPending && !isApproved"
  >
    {{ isRejected ? '再申請' : '申請' }}
  </button> */}
    </div>
  );
}

export default ExpenseAddTab;
