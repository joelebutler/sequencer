/* eslint-disable react/prop-types */
const RecentSelection = ({ recentInst }) => {
  return (
    <label className="absolute left-[20px] top-[10px]">
      Recent:<span id="recent-inst-label">{recentInst}</span>
    </label>
  )
}

export default RecentSelection
