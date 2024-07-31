import React from 'react';
import { IconButton, SvgIcon } from '@mui/material';
import FuseCard from '../card/FuseCard';

// 타입 정의 (필요에 따라 수정)
export type ImgUrl = {
  s3Url: string;
  evdId: string;
}

export type  ExpenseImageAddCardProps = {
  imgUrl?: ImgUrl;
  isHistory?: boolean;
  onAddClick?: (isCamera?: boolean) => void;
  onDeleteClick?: (evdId: string) => void;
  openImageViewer?: (url: string) => void;
}

const ExpenseImageAddCard: React.FC<ExpenseImageAddCardProps> = ({
  imgUrl,
  isHistory = false,
  onAddClick = () => {},
  onDeleteClick = () => {},
  openImageViewer = () => {}
}) => {
  // Mobile view 판별 함수
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const handleAddClick = (isCamera: boolean = false) => {
    onAddClick(isCamera);
  };

  const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (imgUrl) {
      onDeleteClick(imgUrl.evdId);
    }
  };

  const handleCardClick = () => {
    if (imgUrl) {
      openImageViewer(imgUrl.s3Url);
    }
  };

  return (
    <>
      {imgUrl ? (
        <div className="relative w-full border cursor-pointer" onClick={handleCardClick}>
          <FuseCard>
            <img src={imgUrl.s3Url} alt="Expense" className="w-full h-auto" />
            {!isHistory && (
              <IconButton
                className="absolute top-0 right-0"
                onClick={(event) => {
                  event.stopPropagation();
                  handleDeleteClick(event);
                }}
              >
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 6h18M4 6l1.5 14.5A2 2 0 0 0 7.5 22h9a2 2 0 0 0 2-2l1.5-14.5M10 11v6m4-6v6M8 6l.5-2h7l.5 2"
                    />
                  </svg>
                </SvgIcon>
              </IconButton>
            )}
          </FuseCard>
        </div>
      ) : (
        <>
          {/* Mobile view */}
          {isMobile() ? (
            <FuseCard className="w-full cursor-pointer" flippable>
              <div className="fuse-card-front">
                <div
                  className="w-full py-36 text-center"
                  onClick={() => handleAddClick(false)}
                >
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </SvgIcon>
                </div>
              </div>
              <div className="fuse-card-back">
                <div className="flex">
                  <div
                    className="w-1/2 py-36 text-center pl-[15%]"
                    onClick={() => handleAddClick(true)}
                  >
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="#1e293b"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M3 9a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 10.07 4h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 18.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <path d="M15 13a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                        </g>
                      </svg>
                    </SvgIcon>
                  </div>
                  <div
                    className="w-1/2 py-36 text-center pr-[15%]"
                    onClick={() => handleAddClick()}
                  >
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="#1e293b"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2l1.586-1.586a2 2 0 0 1 2.828 0L20 14m-6-6h.01M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2"
                        />
                      </svg>
                    </SvgIcon>
                  </div>
                </div>
              </div>
            </FuseCard>
          ) : (
            /* Desktop view */
            <FuseCard className="flex m-auto py-36 cursor-pointer w-full">
              <div className="w-full text-center">
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </SvgIcon>
              </div>
            </FuseCard>
          )}
        </>
      )}
    </>
  );
};

export default ExpenseImageAddCard;
