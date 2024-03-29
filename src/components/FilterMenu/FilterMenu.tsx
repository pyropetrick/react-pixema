import { CrossIcon } from "assets";
import {
  Button,
  ISelectOption,
  Label,
  MovieType,
  MovieTypeSelect,
  Portal,
  Title,
} from "components";
import { TargetPortal } from "config";
import { Input, InputGroup } from "ui";
import { Background, FilterHeader, Filters, GroupButton, StyledFilterMenu } from "./styles";
import { generatePath, useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import { ROUTE } from "router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IProps {
  toogleFilter: () => void;
}
interface IFilterForm {
  title: string;
  year: string;
  movieType: ISelectOption;
}

const options = [
  { value: MovieType.MOVIES, label: "Movie" },
  { value: MovieType.SERIES, label: "Series" },
  { value: MovieType.EPISODE, label: "Episode" },
];

export const FilterMenu = ({ toogleFilter }: IProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IFilterForm>({ mode: "onBlur", defaultValues: { movieType: options[0] } });

  const navigate = useNavigate();

  const handleCross = () => toogleFilter();

  const onSubmit: SubmitHandler<IFilterForm> = (filterData) => {
    const { year, title, movieType } = filterData;
    toogleFilter();
    navigate(
      `${generatePath(ROUTE.SEARCH, { title })}?${createSearchParams({
        year,
        type: movieType.value,
      })}`,
    );
  };

  const handleClear = () => reset();

  return (
    <Portal target={TargetPortal.MODAL}>
      <StyledFilterMenu>
        <Background
          onClick={toogleFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut" }}
        />
        <Filters
          onSubmit={handleSubmit(onSubmit)}
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut" }}
          exit={{ x: 1000, opacity: 0 }}
        >
          <FilterHeader>
            <Title variant={"h2"} text={"Filters"} />
            <CrossIcon onClick={handleCross} />
          </FilterHeader>
          <InputGroup>
            <Label text="Full or short movie name">
              <Input
                placeholder="Type title"
                {...register("title", { required: true })}
                $error={errors.title && true}
              />
            </Label>
            <Label text="Year">
              <Input
                placeholder="Type year"
                type="number"
                max="2023"
                min="1970"
                {...register("year", { required: false })}
                $error={errors.year && true}
              />
            </Label>
            <Label text="Movie type">
              <Controller
                name="movieType"
                rules={{ required: true }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <MovieTypeSelect
                    options={options}
                    value={options.find((option) => option.value === value?.value)}
                    defaultValue={options[0]}
                    onChange={(option) => onChange(option)}
                  />
                )}
              />
            </Label>
          </InputGroup>
          <GroupButton>
            <Button
              type="button"
              text={"Clear filter"}
              variant={"secondary"}
              onClick={handleClear}
            />
            <Button type="submit" text={"Show results"} variant={"primary"} />
          </GroupButton>
        </Filters>
      </StyledFilterMenu>
    </Portal>
  );
};
