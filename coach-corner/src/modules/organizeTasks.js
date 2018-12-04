// @flow
import _ from "lodash";

// Create  a timeline sorted by the titles
export default function organizeTasks(indices, tasks) {
  const tasksWithUniversalTime = [];

  indices.forEach((index) => {
    tasks.forEach((task) => {
      if (index.key in task && task[index.key]) {
        const taskCopy = _.cloneDeep(task);
        taskCopy.universalTime = task[index.key];
        taskCopy.timelineColor = index.color;
        taskCopy.timelineTitle = index.title;
        tasksWithUniversalTime.push(taskCopy);
      }
    });
  });

  // Sort by universal time
  tasksWithUniversalTime.sort((a, b) => (a.universalTime > b.universalTime) 
    ? 1
    : ((b.universalTime > a.universalTime) ? -1 : 0)
  );

  return tasksWithUniversalTime;
}
