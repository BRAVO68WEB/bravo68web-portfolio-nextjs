import { job_exp_1, job_exp_2, job_exp_3, job_exp_4 } from "config";
import { ExpStyle } from "./experinces.style";

function experinces() {
	return (
		<ExpStyle>
			<div className="default">
				<div className="content">
                    <div className="comp-img">
					    <img src={job_exp_1.logo} alt="logo" />
					</div>
                    <p id="name">{job_exp_1.name}</p>
					<p id="info">{job_exp_1.info}</p>
					<p id="role">{job_exp_1.role}</p>
					<p id="dates">
						{job_exp_1.start_date} - {job_exp_1.end_date}
					</p>
					<p id="desp">{job_exp_1.description}</p>
					<p id="techbits">
						{job_exp_1.techstack
							.map((a) => {
								return "#" + a;
							})
							.join(" ")}
					</p>
				</div>
				<div className="content">
                    <div className="comp-img">
                        <img
                            src={job_exp_2.logo}
                            alt="logo"
                            height="20%"
                            width="20%"
                        />
                    </div>
					<p id="name">{job_exp_2.name}</p>
					<p id="info">{job_exp_2.info}</p>
					<p id="role">{job_exp_2.role}</p>
					<p id="dates">
						{job_exp_2.start_date} - {job_exp_2.end_date}
					</p>
					<p id="desp">{job_exp_2.description}</p>
					<p id="techbits">
						{job_exp_2.techstack
							.map((a) => {
								return "#" + a;
							})
							.join(" ")}
					</p>
				</div>
				<div className="content">
                    <div className="comp-img">
                        <img
                            src={job_exp_3.logo}
                            alt="logo"
                            height="30%"
                            width="18%"
                        />
                    </div>
					<p id="name">{job_exp_3.name}</p>
					<p id="info">{job_exp_3.info}</p>
					<p id="role">{job_exp_3.role}</p>
					<p id="dates">
						{job_exp_3.start_date} - {job_exp_3.end_date}
					</p>
					<p id="desp">{job_exp_3.description}</p>
					<p id="techbits">
						{job_exp_3.techstack
							.map((a) => {
								return "#" + a;
							})
							.join(" ")}
					</p>
				</div>
				<div className="content">
                    <div className="comp-img">
                        <img
                            src={job_exp_4.logo}
                            alt="logo"
                            height="35%"
                            width="13%"
                        />
                    </div>
					<p id="name">{job_exp_4.name}</p>
					<p id="info">{job_exp_4.info}</p>
					<p id="role">{job_exp_4.role}</p>
					<p id="dates">
						{job_exp_4.start_date} - {job_exp_4.end_date}
					</p>
					<p id="desp">{job_exp_4.description}</p>
					<p id="techbits">
						{job_exp_4.techstack
							.map((a) => {
								return "#" + a;
							})
							.join(" ")}
					</p>
				</div>
			</div>
		</ExpStyle>
	);
}

export default experinces;
