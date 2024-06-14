import Joi from 'joi';

export function isValidCVSFile(res: any): boolean {
  const CSVFileSchema = Joi.object({
    id: Joi.number().required(),
    filename: Joi.string().required(),
    headers: Joi.array().required(),
    contents: Joi.array().required(),
  });
  const { error } = CSVFileSchema.validate(res);

  if (error) {
    return false;
  }
  return true;
}
