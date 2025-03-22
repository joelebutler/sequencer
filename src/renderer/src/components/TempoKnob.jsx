import { Knob, Pointer, Scale } from 'rc-knob'

export function TempoKnob() {
  return (
    <Knob
      size={100}
      angleOffset={220}
      angleRange={280}
      steps={200}
      min={60}
      max={260}
      onChange={(value) => console.log(value)}
    >
      <Scale tickWidth={2} tickHeight={2} radius={45} />
      <circle r="35" cx="50" cy="50" fill="#FC5A96" />,
      <Pointer width={2} height={35} radius={10} type="rect" color="#FC5A96" />
    </Knob>
  )
}
