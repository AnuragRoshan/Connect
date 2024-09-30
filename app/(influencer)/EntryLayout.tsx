"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectScreenLoaderStatus,
  startScreenLoading,
  stopScreenLoading,
} from "@/redux/slices/Loader/screenLoadingSlice";
import SplashScreen from "@/components/SplashScreen";
import SvgPattern from "@/components/SvgPattern";
import TopLoader from "@/components/TopLoader";
import SearchBar from "@/components/Navbar";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const dispatch = useDispatch();
  const isScreenLoading = useSelector(selectScreenLoaderStatus);

  useEffect(() => {
    // Simulate starting the loading
    dispatch(startScreenLoading());

    // Simulate stopping the loading after some time (e.g., when data is loaded)
    const timer = setTimeout(() => {
      dispatch(stopScreenLoading());
    }, 2000); // Adjust timing as necessary

    // Cleanup function to clear timeout if component unmounts
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      {isScreenLoading ? (
        <SplashScreen />
      ) : (
        <>
          <div className="fixed inset-0 z-0">
            <SvgPattern />
          </div>
          <TopLoader />
          <div className="flex flex-1 w-full relative z-10">
            <div className="flex-1 flex flex-col">
              <SearchBar />
              <div className="flex-1">{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainLayout;
