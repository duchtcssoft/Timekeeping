import classes from "./Banner.module.scss";

/**
 * FIXME: What is is? Should it be placed in /components/molecules?
 */
export default function Banner(props: any) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>chamcong</div>
      <h2 className={classes.title}>{props.title}</h2>
    </div>
  );
}
