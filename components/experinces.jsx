import { job_exp_1, job_exp_2, job_exp_3, job_exp_4 } from "config";
import { ExpStyle } from "./experinces.style";

function experinces() {
	return (
		<ExpStyle>
			<div className="all">
				<div className="company">
					<div className="company-left">
						<div className="company-img">
							<img src={job_exp_1.logo} alt="company logo" />
						</div>
						<div className="company-info">
							<div className="company-name">{job_exp_1.name}</div>
							<div className="company-desp">{job_exp_1.info}</div>
						</div>
					</div>
					<div className="company-right">
						<div className="company-exp-short">
							<div className="company-role-name">
								{job_exp_1.role}
							</div>
							<div className="company-role-dur">
								{job_exp_1.start_date} - {job_exp_1.end_date}
							</div>
						</div>
						<div className="company-role-desp">
							<p className="company-role-desp-para">
								{job_exp_1.description}
							</p>
							<div className="tech-list">
								{job_exp_1.techstack.map((tech) => (
									<div key={tech} className="tech-name">
										#{tech}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="company">
					<div className="company-left">
						<div className="company-img">
							<img src={job_exp_2.logo} alt="company logo" />
						</div>
						<div className="company-info">
							<div className="company-name">{job_exp_2.name}</div>
							<div className="company-desp">{job_exp_2.info}</div>
						</div>
					</div>
					<div className="company-right">
						<div className="company-exp-short">
							<div className="company-role-name">
								{job_exp_2.role}
							</div>
							<div className="company-role-dur">
								{job_exp_2.start_date} - {job_exp_2.end_date}
							</div>
						</div>
						<div className="company-role-desp">
							<p className="company-role-desp-para">
								{job_exp_2.description}
							</p>
							<div className="tech-list">
								{job_exp_2.techstack.map((tech) => (
									<div key={tech} className="tech-name">
										#{tech}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="company">
					<div className="company-left">
						<div className="company-img">
							<img src={job_exp_3.logo} alt="company logo" />
						</div>
						<div className="company-info">
							<div className="company-name">{job_exp_3.name}</div>
							<div className="company-desp">{job_exp_3.info}</div>
						</div>
					</div>
					<div className="company-right">
						<div className="company-exp-short">
							<div className="company-role-name">
								{job_exp_3.role}
							</div>
							<div className="company-role-dur">
								{job_exp_3.start_date} - {job_exp_3.end_date}
							</div>
						</div>
						<div className="company-role-desp">
							<p className="company-role-desp-para">
								{job_exp_3.description}
							</p>
							<div className="tech-list">
								{job_exp_3.techstack.map((tech) => (
									<div key={tech} className="tech-name">
										#{tech}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="company">
					<div className="company-left">
						<div className="company-img">
							<img src={job_exp_4.logo} alt="company logo" />
						</div>
						<div className="company-info">
							<div className="company-name">{job_exp_4.name}</div>
							<div className="company-desp">{job_exp_4.info}</div>
						</div>
					</div>
					<div className="company-right">
						<div className="company-exp-short">
							<div className="company-role-name">
								{job_exp_4.role}
							</div>
							<div className="company-role-dur">
								{job_exp_4.start_date} - {job_exp_4.end_date}
							</div>
						</div>
						<div className="company-role-desp">
							<p className="company-role-desp-para">
								{job_exp_4.description}
							</p>
							<div className="tech-list">
								{job_exp_4.techstack.map((tech) => (
									<div key={tech} className="tech-name">
										#{tech}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</ExpStyle>
	);
}

export default experinces;
