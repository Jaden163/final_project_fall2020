import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

import DiscoverForm from "../components/DiscoverForm";

function Discover({ uid }) {
  function ReplyMessage(e) {
    // stop form from submitting as normal
    e.preventDefault();
    const content = e.currentTarget.replyContent.value;
    axios
      .get(
        `https://pacific-earth-03601.herokuapp.com/reply/accept?uid=${uid}&content=${content}&docid=${discoverPostID}`
      )
      .then(function (response) {
        // get request to URL
      })
      .catch(function (error) {
        // error handle
        console.warn(error);
      });
    window.location.reload();
  }
  function RejectMessage(e) {
    // stop form from submitting as normal
    e.preventDefault();
    axios
      .get(
        `https://pacific-earth-03601.herokuapp.com/reply/reject?uid=${uid}&docid=${discoverPostID}`
      )
      .then(function (response) {
        // get request to URL
      })
      .catch(function (error) {
        // error handle
        console.warn(error);
      });
    window.location.reload();
  }

  const [discoverPost, setDiscoverPost] = useState(null);
  const [discoverPostID, setDiscoverPostID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pacific-earth-03601.herokuapp.com/discover?uid=${uid}`)
      .then(function (response) {
        // get request to URL
        setDiscoverPostID(response.data[0]);
        setDiscoverPost(response.data[1]);
        setLoading(false);
      })
      .catch(function (error) {
        // error handle
        console.warn(error);
      });
  }, []);

  if (loading) return null;

  if (discoverPost == null)
    return (
      <main className="Discover">
        <div className="Discover_Page_Wrapper">
          <div className="Discover_Form_Wrapper">
            <div className="Discover_Form_Container">
              <h1 className="Discover_Null">No new messages at the shore</h1>
            </div>
          </div>
        </div>
      </main>
    );

  return (
    <main className="Discover">
      <DiscoverForm
        discoverPost={discoverPost}
        discoverPostID={discoverPostID}
        ReplyMessage={ReplyMessage}
        RejectMessage={RejectMessage}
      />
    </main>
  );
}

// export allows function to be used somewhere else
export default Discover;
