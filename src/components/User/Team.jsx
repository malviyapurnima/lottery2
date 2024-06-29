import Headings from "../ui/Headings";
import ContainerLayout from "../../layouts/ContainerLayout";
import team1 from "../../assets/images/member-pic1.png";
import team2 from "../../assets/images/member-pic2.png";
import team3 from "../../assets/images/member-pic3.png";
import team4 from "../../assets/images/member-pic4.png";

function Team() {
  return (
    <>
      <ContainerLayout>
        <div className="text-center my-14">
          <Headings
            subtitle={"our authority"}
            title={"we've lotto passionate team"}
          />
        </div>

      </ContainerLayout>
      <div className="bg-[url('/src/assets/images/wavy.svg')] bg-no-repeat bg-cover bg-center z-0 mt-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
          <div className="flex items-center flex-col">
            <img src={team1} alt="" />
            <div className="border-[2px] bg-white mt-16 w-36 border-primary-light rounded-lg flex-col items-center p-4 relative flex justify-center">
              <h3 className="text-[14px] font-[600] z-10">Jane Cooper</h3>
              <p className="text-xs">CEO/Head of ideas</p>
              <div className="border-t-2 border-r-2 bg-white border-primary-light p-2 w-10 h-10 -rotate-45 absolute -top-[21px]"></div>
            </div>
          </div>
          <div className="flex items-center flex-col mt-16">
            <div className="border-[2px] bg-white mb-16 w-36 border-primary-light rounded-lg flex-col items-center p-4 relative flex justify-center">
              <h3 className="text-[14px] font-[600] z-10">Jane Cooper</h3>
              <p className="text-xs z-10">CEO/Head of ideas</p>
              <div className="border-t-2 border-r-2 bg-white border-primary-light p-2 w-10 h-10 rotate-[136deg] absolute -bottom-[21px]"></div>
            </div>
            <img src={team2} alt="" />
          </div>
          <div className="flex items-center flex-col">
            <img src={team3} alt="" />
            <div className="border-[2px] bg-white mt-16 w-36 border-primary-light rounded-lg flex-col items-center p-4 relative flex justify-center">
              <h3 className="text-[14px] font-[600] z-10">Jane Cooper</h3>
              <p className="text-xs">CEO/Head of ideas</p>
              <div className="border-t-2 border-r-2 bg-white border-primary-light p-2 w-10 h-10 -rotate-45 absolute -top-[21px]"></div>
            </div>
          </div>
          <div className="flex items-center flex-col mt-16">
            <div className="border-[2px] bg-white mb-16 w-36 border-primary-light rounded-lg flex-col items-center p-4 relative flex justify-center">
              <h3 className="text-[14px] font-[600] z-10">Jane Cooper</h3>
              <p className="text-xs z-10">CEO/Head of ideas</p>
              <div className="border-t-2 border-r-2 bg-white border-primary-light p-2 w-10 h-10 rotate-[136deg] absolute -bottom-[21px]"></div>
            </div>
            <img src={team4} alt="" />
          </div>
        </div>
      </div>
    </>


  );
}

export default Team;
