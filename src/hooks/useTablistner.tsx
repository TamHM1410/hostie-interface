import { useSignal, useSignals } from "@preact/signals-react/runtime";
import { useEffect } from "react";

const useTabListener = () => {
  useSignals();

  const isDuplicateTab = useSignal(false);

  useEffect(() => {
    const channel = new BroadcastChannel("tabs-channel");
    const tabId = Math.random().toString(36).substr(2, 9);

    channel.postMessage({ type: "tab_open", sender: tabId });

    channel.onmessage = (event) => {
      if (event.data?.type === "tab_open" && event.data.sender !== tabId) {
        isDuplicateTab.value = true;
      }
    };

    return () => {
      channel.close();
    };
  }, []);

  return isDuplicateTab.value;
};

export default useTabListener;
