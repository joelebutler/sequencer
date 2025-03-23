/* eslint-disable react/prop-types */
const RecentSelection = ({ recentInst }) => {
  return (
    <label className="absolute left-[20px] top-[10px] text-sm text-stone-50">
      Active Instrument:
      <span id="recent-inst-label" className="ml-1 ">
        {recentInst}
      </span>
    </label>
  )
}

export default RecentSelection
