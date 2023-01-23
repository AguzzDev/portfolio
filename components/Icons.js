export const IconXs = ({ Icon, props }) => {
  return (
    <Icon
      className={`${props} w-[.8rem] h-[.8rem] text-black1 dark:text-white1`}
    />
  )
}

export const IconSm = ({ Icon, props }) => {
  return <Icon className={`${props} w-5 h-5 text-black1 dark:text-white1`}/>
}

export const IconMd = ({ Icon, props }) => {
  return <Icon className={`${props} w-7 h-7 text-black1 dark:text-white1`} />
}

export const IconCustomSize = ({ Icon, size }) => {
  return <Icon className={`${size} text-black1 dark:text-white1`} />
}
