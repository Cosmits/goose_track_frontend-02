import {
  TaskToolbarButton,
  TaskToolbarList,
  TaskToolbarItem,
  EditIcon,
  RemoveIcon,
  SwipeIcon,
} from './TaskToolbar.styled';

export default function TaskToolbar() {
  const toolbarList = {
    swipe: <SwipeIcon />,
    edit: <EditIcon />,
    remove: <RemoveIcon />,
  };

  const icons = Object.keys(toolbarList);
  return (
    <>
      <TaskToolbarList>
        {icons.map((icon) => {
          return (
            <TaskToolbarItem key={icon}>
              <TaskToolbarButton
                type="button"
                onClick={() => console.log(`${icon} button click`)}
              >
                {toolbarList[icon]}
              </TaskToolbarButton>
            </TaskToolbarItem>
          );
        })}
      </TaskToolbarList>
    </>
  );
}
