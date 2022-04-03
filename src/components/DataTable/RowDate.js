import React, { useEffect, useState } from "react";
import moment from "moment";

export default function RowDate({ date }) {
 const [diffDate,setDiffDate] = useState("")
  useEffect(() => {
    const today = moment();
    const years = today.diff(date, "years");
    const months = today.diff(date, "months");
    const weeks = today.diff(date, "weeks");
    const days = today.diff(date, "days");
    const hours = today.diff(date, "hours");
    if(years > 0) setDiffDate (`${years == 1 ? 'a year'  : `${years} years` }`)
    else if(months > 0) setDiffDate (`${months == 1 ? 'a month'  : `${months} months` }`)
    else if(weeks > 0) setDiffDate (`${weeks == 1 ? 'a week'  : `${weeks} weeks` }`)
    else if(days > 0) setDiffDate (`${days == 1 ? 'a day'  : `${days} days` }`)
    else if(hours > 0) setDiffDate (`${hours == 1 ? 'a hour'  : `${hours} hours` }`)
  }, [date]);

  return (
    <p className="font-medium text-sm not-italic font-sans text-indigo-800 flex-nowrap">
      {diffDate}{" ago"}
    </p>
  );
}
