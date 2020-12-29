import React from "react";

export default function Terms() {
    return (
        <div class="caption-container">
            <span
                class="small-link"
                onClick={() =>
                    (window.location.href =
                        "https://schoolnet.mk/client/common/privacypolicy.html")
                }
            >
                Приватност
            </span>
            <span
                class="small-link"
                onClick={() =>
                    (window.location.href =
                        "https://schoolnet.mk/client/common/termsofuse.html")
                }
            >
                Услови
            </span>
        </div>
    );
}
