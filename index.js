import _ from "lodash";
import ps from "zuosh-current-processes";

ps.get((err, processes) => {
  const sorted = _.sortBy(processes, "cpu");
  //   if(sorted.)
  const top5 = sorted.reverse().splice(0, 5);

  console.log(top5);
});
