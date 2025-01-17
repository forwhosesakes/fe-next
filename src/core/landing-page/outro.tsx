import Chip from "../../components/chip/chip.tsx"
import SectionWrapper from "../../components/hoc/section-wrapper.tsx"
import Logo from '../../assets/icons/vertical-logo.svg?react'
import EncryptionVid from '../../assets/vids/encryption.mp4'

const Outro = ()=>{



    return <SectionWrapper styles="w-full relative" id={"#outro"}>
       
       <div className="absolute h-1/3 w-1/2 z-20 flex flex-col justify-between  items-center">
       <Logo width={"35%"} height={"35%"}/>
       <Chip>أمان</Chip>
       <h3 className="text-paragraphs_primary font-bold ">من هنا أمان لكل مكان </h3>
       <p className="font-medium  opacity-75 text-[rgba(239, 237, 253, 0.70)]">مجتمعات آمنة على مدار اللحظة</p>
       </div>


        <video   loop
            muted
            autoPlay  className="absolute" src={EncryptionVid}/>
       
    </SectionWrapper>
}

export default Outro