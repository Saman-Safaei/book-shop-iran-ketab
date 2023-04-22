import type { FC } from "react";
import { useAppDispatch, useSelect } from "@/store";
import {Fragment, useEffect, useRef} from "react";
import Link from "next/link";
import { Profile, CloseCircle } from "iconsax-react";
import { CSSTransition } from "react-transition-group";
import { actions } from "@/store/ui-slice";

export interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const dispatch = useAppDispatch();
  const isOpen = useSelect((state) => state.ui.isSidebarOpen);
  const backdropNodeRef = useRef<HTMLDivElement>(null);
  const slideNodeRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    }
    else {
      document.body.style.overflowY = 'initial';
    }
  }, [isOpen])

  return (
    <Fragment>
      <CSSTransition
        classNames="fade"
        nodeRef={backdropNodeRef}
        in={isOpen}
        timeout={300}
        unmountOnExit>
        <div
          onClick={() => dispatch(actions.closeSidebar())}
          ref={backdropNodeRef}
          className="fixed inset-0 z-[49] block bg-black/10 backdrop-blur-md lg:hidden"
        />
      </CSSTransition>
      <CSSTransition
        classNames="slide"
        nodeRef={slideNodeRef}
        in={isOpen}
        timeout={300}
        unmountOnExit>
        <aside
          ref={slideNodeRef}
          className="fixed right-0 top-0 z-50 block h-full w-full max-w-[18rem] bg-white/90 p-4 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col items-stretch">
            <li className='flex flex-row items-center justify-between'>
              <Link className="block py-4 pr-4" href="/">
                <Profile size="30" color="var(--primary-color)" />
              </Link>
              <button onClick={() => dispatch(actions.closeSidebar())}>
                <CloseCircle variant='Bulk' color='var(--primary-color)' size='36' />
              </button>
            </li>
            <li>
              <Link className="block py-4 pr-4" href="/">
                خانه
              </Link>
            </li>
            <li>
              <Link className="block py-4 pr-4" href="/">
                بزرگسال
              </Link>
            </li>
            <li>
              <Link className="block py-4 pr-4" href="/">
                نوجوان
              </Link>
            </li>
            <li>
              <Link className="block py-4 pr-4" href="/">
                کودک
              </Link>
            </li>
            <li>
              <Link className="block py-4 pr-4" href="/">
                درباره ما
              </Link>
            </li>
            <li>
              <Link className="block py-4 pr-4" href="/">
                تماس با ما
              </Link>
            </li>
          </ul>
        </aside>
      </CSSTransition>
    </Fragment>
  );
};

export default Sidebar;
