import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  const onClick = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <section>
        <form id="skeleton">
          <button type="submit" onClick={onClick}>
            would you like to Sign Out?
          </button>
        </form>
        {/* <Home /> */}
        <Skeleton height={320} width={400} />
      </section>
    </SkeletonTheme>
  );
};

export default Logout;