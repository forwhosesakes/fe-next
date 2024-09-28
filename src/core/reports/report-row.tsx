type TProps = {
  report: ReportEntity
  selected: boolean
}

import FailIcon from "../../assets/icons/fail.svg?react"
import SuccessIcon from "../../assets/icons/success.svg?react"
import ProgressIcon from "../../assets/icons/in-progress.svg?react"
import LeftArrowIcon from "../../assets/icons/left-arrow.svg?react"
import PollutionChip from "./pollutionchip"

const ReportRow = (props: TProps) => {
  return (
    <div
      className={`flex w-full justify-between py-3 pl-2 pr-5 transition-all hover:bg-white/5 ${props.selected && "bg-white/5"}`}
    >
      <p>{props.report.title}</p>

      <div className="flex gap-x-5 px-5">
        {props.report.categories.map((cat: any) => {
          return <PollutionChip category={cat} />
        })}
      </div>

      <div
        className={`border-[rgba(255, 255, 255, 0.12)] bg-[rgba(255, 255, 255, 0.04)] h-4 w-4 rounded-full`}
      />
      <div className="flex flex-row opacity-75">
        {props.report.id % 3 === 0 ? (
          <FailIcon />
        ) : props.report.id % 3 === 1 ? (
          <SuccessIcon />
        ) : (
          <ProgressIcon />
        )}

        <LeftArrowIcon className="mr-2" width={24} height={24} />
      </div>
    </div>
  )
}

export default ReportRow
