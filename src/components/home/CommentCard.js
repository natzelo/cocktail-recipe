import React from "react";
import profile from "../../images/profile.jpg";
function CommentCard() {
  return (
    <div className="comment">
      <span className="comma">
        <i class="fas fa-quote-left"></i>
      </span>
      <p className="user-comment">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
        doloremque vero? A, natus, doloribus similique sed eos sit dolorem eum
        sequi accusantium expedita commodi officia aliquam assumenda laboriosam
        harum suscipit.
      </p>
      <div className="man">
        <img src={profile} alt="profile" />

        <p className="user-name">Roger Scott</p>
        <p className="designation">Marketing Manager</p>
      </div>
    </div>
  );
}

export default CommentCard;
