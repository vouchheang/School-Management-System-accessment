export const paginate = async (
  model,
  query = {},
  page = 1,
  limit = 10,
  populateFields = ""
) => {
  try {
    const skip = (page - 1) * limit;

    // Find data with pagination and populate the related fields
    const data = await model
      .find(query)
      .skip(skip)
      .limit(parseInt(limit))
      .populate(populateFields);

    // Count total documents matching the query
    const totalDocuments = await model.countDocuments(query);

    // Return paginated data along with pagination info
    return {
      data,
      totalDocuments,
      totalPages: Math.ceil(totalDocuments / limit),
      currentPage: parseInt(page),
    };
  } catch (error) {
    throw new Error("Error during pagination");
  }
};
