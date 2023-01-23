import Link from "next/link"

import { ListComponent } from "components/UI/ListComponent"
import { GaleryComponent } from "components/UI/GaleryComponent"
import { HeaderComponent } from "components/UI/HeaderComponent"

export default {
  h1: (props) => (
    <h1 {...props} className="text-6xl font-mainBold gradient1" />
  ),
  h2: (props) => <h2 {...props} className="text-3xl" />,
  Header: (data) => <HeaderComponent data={data} />,
  Galery: (data) => <GaleryComponent data={data} />,
  LinkTo: ({ to, name }) => (
    <Link passHref href={to}>
      <a target="_blank" className="font-mainBold gradient-text-1">
        {name}
      </a>
    </Link>
  ),
  Description: ({ text }) => <p className="py-2">{text}</p>,
  List: (data) => <ListComponent data={data} />,
}
