"use client";

import { useState } from "react";
import Logo from "./logo";
import Menu from "./menu";
import Search from "./search";
import SignInButton from "./sign-in-button";
import SignUpButton from "./sign-up-button";
import Modal from "../ui/modals/modal";
import AuthContent from "./auth-content";
import Avatar from "./avatar";
import NotificationIcon from "./notification-icon";
import Submit from "./submit";
import Category from "./category";
import Cart from "../cart/cart";
import Wishlist from "../wishlist/wishlist";
import MobileMenu from "./mobile-navbar";

interface NavbarProps {
  authenticatedUser?: any;
  notifications?: any;
  products?: any;
}

const Navbar: React.FC<NavbarProps> = ({
  authenticatedUser,
  notifications,
  products,
}) => {
  const [authModalVisible, setAuthModalVisible] = useState(false);

  const handleButtonClick = () => {
    setAuthModalVisible(true);
  };

  return (
    <div className="border-b py-0 md:py-0 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <div className="flex items-center h-16 lg:w-[60rem] gap-12">
          <Logo />
          <div className="hidden lg:flex items-center h-fit flex-1">
            <Category />
            <Search />
          </div>
        </div>

        <div className="transform z-10 hidden lg:flex">
          <Menu />
        </div>

        <div className="flex items-center text-sm space-x-5 cursor-pointer">
          <div className="hidden lg:flex items-center gap-4">
            <Cart />
            <Wishlist />
          </div>
          {authenticatedUser ? (
            <>
              {/* <Submit
                products={products}
                authenticatedUser={authenticatedUser}
              /> */}
              <NotificationIcon notifications={notifications} />
              <Avatar authenticatedUser={authenticatedUser} />
            </>
          ) : (
            <div
              onClick={handleButtonClick}
              className="flex items-center space-x-6 cursor-pointer text-sm"
            >
              <SignInButton />
              <SignUpButton />
            </div>
          )}
        </div>

        <Modal visible={authModalVisible} setVisible={setAuthModalVisible}>
          <AuthContent />
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
