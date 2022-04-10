import useMousePosition from "hooks/useMousePosition"

const MouseCustom = () => {
  const { x, y } = useMousePosition()
  return (
    <>
      <div style={{ left: `${x}px`, top: `${y}px` }} className="ring"></div>
    </>
  )
}

export default MouseCustom
