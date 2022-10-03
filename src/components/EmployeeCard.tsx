import React, { useState } from "react";
import EmployeeItem from "../employee-item";
import { VscMail } from "react-icons/vsc";

export default function EmployeeCard({
  id,
  avatar,
  first_name,
  last_name,
  email,
}: EmployeeItem) {
  //  const [employees, setEmployees] = useState<EmployeeItem[]>([]);

  return (
    <div key={id} className="card">
      <div className="avatar">
        <img src={avatar} alt={`${first_name} ${last_name}`} />
      </div>
      <div className="employee-info">
        <h2>
          {first_name} {last_name}
        </h2>
        <div className="contact-info">
          <div>
            <VscMail />
          </div>
          <div>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
