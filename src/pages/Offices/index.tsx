// import ContentManger from "./mains/ContentOffices";
// import classes from "./Signin.module.scss";

// export default function Offices() {
// const [loading, setLoading] = useState(false);
// const [offices, setOffices] = useState([]);
// const [page, setPage] = useState(1);
// const [pageSize, setPageSize] = useState(8);
// useEffect(() => {
//   const fetchTables = async () => {
//     setLoading(true);
//     await axios.get(`${API_URL}/offices`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${TOKEN}`,
//         },
//       }).then((res) => {
//         setOffices(res.data.data);
//         console.log(res);
//         setPageSize(res.data.pagination.perPage);
//         console.log(res.data.pagination.perPage);
//         setPage(res.data.pagination.currentPage);
//         console.log(res.data.pagination.currentPage);
//       })
//       .catch((error) => {
//         console.log(error);
//       }).finally(() => {
//         setLoading(false);
//       },
//       );
//   };
//   fetchTables();
// }, []);
//   return (
//     <div className={classes.wrapper}>
//       <ContentManger />
//     </div>
//   );
// }

// libs
import { useDispatch, useSelector } from "react-redux";
// hooks
import { useRouter } from "@/hooks/router/useRouter";
import { useStore } from "@/hooks/useStore";
// actions
import { updateMagicNumber } from "@/redux/actions/example";
// others
import { notify } from "@/utils/notify";
import { ROUTES } from "@/constants/routers";
import MainLayout from "@/components/Layout/Layout";
import classes from "./Signin.module.scss";
import { useState, useEffect } from "react";
import { useAddOffice } from "@/api/requestOffices";
import ContentOffices from "./mains/ContentOffices";
// import { RootState } from "@/redux/store";

export default function Offices() {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className={classes.wrapper}>
      <MainLayout>
        <ContentOffices />
      </MainLayout>
    </div>
  );
}
