import React from "react";
import SkillCard from "../skillCard";

function GitCommits({ title, image, evt1, evt2, evt3, url }) {
	let ghLogo = "/images/github_events/GitIcon.png";

	[evt1, evt2, evt3].map((evt) => {
		if (evt?.type === "PushEvent") {
			evt.entTypeLogo =
				"/images/github_events/github_push_event_logo.png";
			evt.commitMsg = evt.payload.commits[0].message;
		} else if (evt?.type === "WatchEvent") {
			evt.entTypeLogo =
				"/images/github_events/github_watch_event_logo.png";
		} else if (evt?.type === "IssuesEvent") {
			evt.entTypeLogo =
				"/images/github_events/github_issues_event_logo.png";
			if (evt?.payload.action === "opened") {
				evt.commitMsg = "Opened " + evt.payload.issue.title;
			} else if (evt?.payload.action === "closed") {
				evt.commitMsg = "Closed " + evt.payload.issue.title;
			}
		} else if (evt?.type === "DeleteEvent") {
			evt.entTypeLogo =
				"/images/github_events/github_delete_event_logo.png";
			evt.commitMsg =
				evt.payload.ref_type + " " + evt.payload.ref + " deleted";
		} else if (evt?.type === "IssueCommentEvent") {
			evt.entTypeLogo =
				"/images/github_events/github_issue_comment_event_logo.png";
			evt.commitMsg = evt.payload.comment.body;
		} else if (evt?.type === "CreateEvent") {
			evt.entTypeLogo =
				"/images/github_events/github_create_event_logo.png";
			evt.commitMsg = evt.payload.ref_type;
		} else if (evt?.type === "PullRequestEvent") {
			evt.entTypeLogo =
				"/images/github_events/github_pull_request_event_logo.png";
			if (evt?.payload.action === "opened") {
				evt.commitMsg = "Opened " + evt.payload.pull_request.title;
			} else if (evt?.payload.action === "closed") {
				evt.commitMsg = "Closed " + evt.payload.pull_request.title;
			}
		} else if (evt?.type === "ForkEvent") {
			evt.entTypeLogo =
				"/images/github_events/github_fork_event_logo.png";
			evt.commitMsg = "Forked " + evt.payload.forkee.full_name;
		}
	});

	return (
		<SkillCard title={title} image={image} url={url}>
			<div className="gh-cards">
				<div className="description gh-act-icons">
					<img src={ghLogo} width="20px" />{" "}
					<img src={evt1?.entTypeLogo} height="20px" />
					<br />
					{evt1?.repo?.name}
				</div>
				<div className="value commit-msg">
					{evt1?.commitMsg?.slice(0, 50)}
				</div>
				{/* <div className="description">{evt1?.created_at}</div> */}
			</div>
			<br />
			<div className="gh-cards">
				<div className="description gh-act-icons">
					<img src={ghLogo} width="20px" />{" "}
					<img src={evt2?.entTypeLogo} height="20px" />
					<br />
					{evt2?.repo?.name}
				</div>
				<div className="value commit-msg">
					{evt2?.commitMsg?.slice(0, 50)}
				</div>
				{/* <div className="description">{evt2?.created_at}</div> */}
			</div>
			<br />
			<div className="gh-cards">
				<div className="description gh-act-icons">
					<img src={ghLogo} width="20px" />{" "}
					<img src={evt3?.entTypeLogo} height="20px" />
					<br />
					{evt3?.repo?.name}
				</div>
				<div className="value commit-msg">
					{evt3?.commitMsg?.slice(0, 50)}
				</div>
				{/* <div className="description">{evt3?.created_at}</div> */}
			</div>
		</SkillCard>
	);
}

export default GitCommits;
