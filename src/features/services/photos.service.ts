import { request } from "@/app/http/http";
import { PhotoEntity } from "@/app/types";
import { AddFormValues } from "@/shared/ui/add-form";

export const $createPhotoFx = async (data: AddFormValues) => {
  return await request<PhotoEntity>({
    method: "post",
    url: "/photo",
    data,
  });
};

export const $getAllPhotosFx = async () => {
  return await request<PhotoEntity[]>({
    method: "get",
    url: "/photo",
  });
};

export const PhotosService = {
  $createPhotoFx,
  $getAllPhotosFx,
};
