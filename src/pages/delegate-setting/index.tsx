import Button from "components/button";
import Input from "components/input";
import { ROUTES } from "constants/routes";
import Switch from "rc-switch";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DelegateSetting = () => {
  const [delegate, setDelegate] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold" style={{ color: "#2563eb" }}>
        Delegate Settings
      </h2>
      <main className="mt-4">
        <div className="mb-4">
          <div className="text-lg font-medium">Delegate Access</div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">
              You can denote someone as your delegate, who will be allowed to
              access your registered private keys (for recovery or/and sig).
            </span>
            <Switch
              checked={delegate}
              onChange={(checked) => setDelegate(checked)}
            />
          </div>
        </div>
        {delegate && (
          <div className="">
            <div className="text-lg font-medium">Set Your Delegate</div>
            <div className="text-gray-500">
              Set your Delegate (should have been registered before with an
              email account). Your delegate will be allowed to access your
              registered private keys when he or she is authed to Keysafe.
            </div>
            <div className="flex items-center mt-2">
              <Input className="w-80" />
              <Button className="ml-4" type="primary">
                CONFIRM
              </Button>
            </div>
          </div>
        )}
      </main>
      <footer className="mt-20">
        <Button type="primary" onClick={() => navigate(ROUTES.SET_CONDITIONS)}>
          CONTINUE
        </Button>
      </footer>
    </section>
  );
};
export default DelegateSetting;
