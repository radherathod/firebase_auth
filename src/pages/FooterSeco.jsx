import React from "react";

const FooterSeco = () => {
  return (
    <div>
      <div className="bg-gray-100  flex items-center justify-center">
        <div className="flex space-x-3">
          <a
            href="/privacy"
            className="text-xs text-gray-500 hover:underline opacity-100"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-xs text-gray-500 hover:underline opacity-100"
          >
            Terms of Service
          </a>
          <a
            href="/cookie-notice"
            className="text-xs text-gray-500 hover:underline opacity-100"
          >
            Cookie Notice
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSeco;
