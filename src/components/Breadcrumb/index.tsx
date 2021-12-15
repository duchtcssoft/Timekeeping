import { useStore } from "@/hooks/useStore";
import { Breadcrumb } from "antd";

/**
 * FIXME: What is is? Should it be placed in /components/molecules?
 */

const MainBreadcrumb = () => {
const ac = useStore("TimeKeeping", "timeKeepingReducer");
console.log("ac", ac.timeKeepingList);
  const a = 1;
  return (
    <Breadcrumb style={{ marginBottom: 30 }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default MainBreadcrumb;
