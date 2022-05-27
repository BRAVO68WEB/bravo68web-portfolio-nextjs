import React from "react";
import SkillCard from "../skillCard";

function GitHubUserEvtSkillCard({ title, image, evt1, evt2, evt3, url }) {
  var ghLogo = "/images/github_events/GitIcon.png";
  // Evt1
  if (evt1.type === "PushEvent") {
    evt1.entTypeLogo = "/images/github_events/github_push_event_logo.png";
    evt1.commitMsg = evt1.payload.commits[0].message;
  } else if (evt1.type === "WatchEvent") {
    evt1.entTypeLogo = "/images/github_events/github_watch_event_logo.png";
  } else if (evt1.type === "IssuesEvent") {
    evt1.entTypeLogo = "/images/github_events/github_issues_event_logo.png";
    if (evt1.payload.action === "opened") {
      evt1.commitMsg = "Opened " + evt1.payload.issue.title;
    } else if (evt1.payload.action === "closed") {
      evt1.commitMsg = "Closed " + evt1.payload.issue.title;
    }
  } else if (evt1.type === "DeleteEvent") {
    evt1.entTypeLogo = "/images/github_events/github_delete_event_logo.png";
    evt1.commitMsg =
      evt1.payload.ref_type + " " + evt1.payload.ref + " deleted";
  } else if (evt1.type === "IssueCommentEvent") {
    evt1.entTypeLogo =
      "/images/github_events/github_issue_comment_event_logo.png";
    evt1.commitMsg = evt1.payload.comment.body;
  } else if (evt1.type === "CreateEvent") {
    evt1.entTypeLogo = "/images/github_events/github_create_event_logo.png";
    evt1.commitMsg = evt1.payload.ref_type;
  } else if (evt1.type === "PullRequestEvent") {
    evt1.entTypeLogo =
      "/images/github_events/github_pull_request_event_logo.png";
    if (evt1.payload.action === "opened") {
      evt1.commitMsg = "Opened " + evt1.payload.pull_request.title;
    } else if (evt1.payload.action === "closed") {
      evt1.commitMsg = "Closed " + evt1.payload.pull_request.title;
    }
  } else if (evt1.type === "ForkEvent") {
    evt1.entTypeLogo = "/images/github_events/github_fork_event_logo.png";
    evt1.commitMsg = "Forked " + evt1.payload.forkee.full_name;
  }
  // Evt2
  if (evt2.type === "PushEvent") {
    evt2.entTypeLogo = "/images/github_events/github_push_event_logo.png";
    evt2.commitMsg = evt2.payload.commits[0].message;
  } else if (evt2.type === "WatchEvent") {
    evt2.entTypeLogo = "/images/github_events/github_watch_event_logo.png";
  } else if (evt2.type === "IssuesEvent") {
    evt2.entTypeLogo = "/images/github_events/github_issues_event_logo.png";
    if (evt2.payload.action === "opened") {
      evt2.commitMsg = "Opened " + evt2.payload.issue.title;
    } else if (evt2.payload.action === "closed") {
      evt2.commitMsg = "Closed " + evt2.payload.issue.title;
    }
  } else if (evt2.type === "DeleteEvent") {
    evt2.entTypeLogo = "/images/github_events/github_delete_event_logo.png";
    evt2.commitMsg =
      evt2.payload.ref_type + " " + evt2.payload.ref + " deleted";
  } else if (evt2.type === "IssueCommentEvent") {
    evt2.entTypeLogo =
      "/images/github_events/github_issue_comment_event_logo.png";
    evt2.commitMsg = evt2.payload.comment.body;
  } else if (evt2.type === "CreateEvent") {
    evt2.entTypeLogo = "/images/github_events/github_create_event_logo.png";
    evt2.commitMsg = evt2.payload.ref_type;
  } else if (evt2.type === "PullRequestEvent") {
    evt2.entTypeLogo =
      "/images/github_events/github_pull_request_event_logo.png";
    if (evt2.payload.action === "opened") {
      evt2.commitMsg = "Opened " + evt2.payload.pull_request.title;
    } else if (evt2.payload.action === "closed") {
      evt2.commitMsg = "Closed " + evt2.payload.pull_request.title;
    }
  } else if (evt2.type === "ForkEvent") {
    evt2.entTypeLogo = "/images/github_events/github_fork_event_logo.png";
    evt2.commitMsg = "Forked " + evt2.payload.forkee.full_name;
  }
  // Evt3
  if (evt3.type === "PushEvent") {
    evt3.entTypeLogo = "/images/github_events/github_push_event_logo.png";
    evt3.commitMsg = evt3.payload.commits[0].message;
  } else if (evt3.type === "WatchEvent") {
    evt3.entTypeLogo = "/images/github_events/github_watch_event_logo.png";
  } else if (evt3.type === "IssuesEvent") {
    evt3.entTypeLogo = "/images/github_events/github_issues_event_logo.png";
    if (evt3.payload.action === "opened") {
      evt3.commitMsg = "Opened " + evt3.payload.issue.title;
    } else if (evt3.payload.action === "closed") {
      evt3.commitMsg = "Closed " + evt3.payload.issue.title;
    }
  } else if (evt3.type === "DeleteEvent") {
    evt3.entTypeLogo = "/images/github_events/github_delete_event_logo.png";
    evt3.commitMsg =
      evt3.payload.ref_type + " " + evt3.payload.ref + " deleted";
  } else if (evt3.type === "IssueCommentEvent") {
    evt3.entTypeLogo =
      "/images/github_events/github_issue_comment_event_logo.png";
    evt3.commitMsg = evt3.payload.comment.body;
  } else if (evt3.type === "CreateEvent") {
    evt3.entTypeLogo = "/images/github_events/github_create_event_logo.png";
    evt3.commitMsg = evt3.payload.ref_type;
  } else if (evt3.type === "PullRequestEvent") {
    evt3.entTypeLogo =
      "/images/github_events/github_pull_request_event_logo.png";
    if (evt3.payload.action === "opened") {
      evt3.commitMsg = "Opened " + evt3.payload.pull_request.title;
    } else if (evt3.payload.action === "closed") {
      evt3.commitMsg = "Closed " + evt3.payload.pull_request.title;
    }
  } else if (evt3.type === "ForkEvent") {
    evt3.entTypeLogo = "/images/github_events/github_fork_event_logo.png";
    evt3.commitMsg = "Forked " + evt3.payload.forkee.full_name;
  }

  return (
    <SkillCard title={title} image={image} url={url}>
      <div className="gh-cards">
        <div className="description gh-act-icons">
          <img src={ghLogo} width="20px" />{" "}
          <img src={evt1.entTypeLogo} height="20px" />
          <br />
          {evt1.repo.name}
        </div>
        <div className="description commit-msg">{evt1?.commitMsg}</div>
        {/* <div className="description">{evt1?.created_at}</div> */}
      </div>
      <br />
      <div className="gh-cards">
        <div className="description gh-act-icons">
          <img src={ghLogo} width="20px" />{" "}
          <img src={evt2.entTypeLogo} height="20px" />
          <br />
          {evt2.repo.name}
        </div>
        <div className="description commit-msg">{evt2?.commitMsg}</div>
        {/* <div className="description">{evt2?.created_at}</div> */}
      </div>
      <br />
      <div className="gh-cards">
        <div className="description gh-act-icons">
          <img src={ghLogo} width="20px" />{" "}
          <img src={evt3.entTypeLogo} height="20px" />
          <br />
          {evt3.repo.name}
        </div>
        <div className="description commit-msg">{evt3?.commitMsg}</div>
        {/* <div className="description">{evt3?.created_at}</div> */}
      </div>
    </SkillCard>
  );
}

export default GitHubUserEvtSkillCard;
