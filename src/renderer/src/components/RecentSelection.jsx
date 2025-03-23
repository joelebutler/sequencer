/* eslint-disable react/prop-types */
const RecentSelection = ({ recentInst }) => {
  return (
    <label className="absolute left-[20px] top-[10px]">
      Active Instrument:
      <span id="recent-inst-label" className="ml-1 ">
        {recentInst}
      </span>
    </label>
  )
}

export default RecentSelection
