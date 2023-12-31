"use client";

import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";

import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", newLimit.toString());
    router.push(newPathName);
  };

  return (
    <div className='w-full flex-center mt-10 gap-5'>
      {!isNext && (
        <CustomButton
          title='Show more'
          btnType='button'
          containerStyles='bg-[#e63d3d] rounded-full text-white'
          onClickHandler={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
