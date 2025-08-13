import { Group, TextInput, Image } from "@mantine/core";

interface Props {
  value: string;
  name: string;
  iconSource: string;
  handleChange: (value: string) => void;
  handleClick?: () => void;
}

const CustomInputButton = ({
  name,
  value,
  iconSource,
  handleChange,
  handleClick,
}: Props) => {
  return (
    <Group>
      <TextInput
        placeholder={name}
        h={"50%"}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
      />
      <Image
        src={iconSource}
        onClick={handleClick}
        style={{ cursor: !handleClick ? "" : "pointer" }}
      />
    </Group>
  );
};

export default CustomInputButton;
