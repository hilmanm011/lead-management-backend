const validator = require("validator");
const Lead = require("../models/Lead");
const { errorResponse, successResponse } = require("../utils/response");

class LeadController {
    // Add New Lead
    static async addLead(req, res) {
        try {
            const { name, email, status } = req.body;

            // Validation input
            if (!name || !email || !status) {
                return errorResponse(res, "All fields are required", 400);
            }
            if (!validator.isEmail(email)) {
                return errorResponse(res, "Invalid email format", 400);
            }

            // Validtion email exists
            const existingLead = await Lead.findOne({ email });
            if (existingLead) {
                return errorResponse(res, "Email already exists", 400);
            }

            // Save new data
            const newLead = new Lead({ name, email, status });
            await newLead.save();

            return successResponse(res, newLead, "Lead added successfully", 201);
        } catch (error) {
            return errorResponse(res, "Server error: " + error.message, 500);
        }
    }

    // Get All Leads
    static async getLeads(req, res) {
        try {
            const { status, skip = "0", limit = "10" } = req.query;

            // ✅ Validasi skip & limit harus angka positif
            const parsedSkip = parseInt(skip, 10);
            const parsedLimit = parseInt(limit, 10);

            if (isNaN(parsedSkip) || parsedSkip < 0) {
                return errorResponse(res, "Invalid skip value", 400);
            }
            if (isNaN(parsedLimit) || parsedLimit <= 0) {
                return errorResponse(res, "Invalid limit value", 400);
            }

            // 🔹 Buat filter berdasarkan status (jika ada)
            const filter = status ? { status } : {};

            // 🔹 Ambil data dengan pagination
            const leads = await Lead.find(filter)
                .sort({ createdAt: -1 }) // Urutkan dari terbaru
                .skip(parsedSkip) // ✅ Skip sejumlah data
                .limit(parsedLimit); // ✅ Batasi jumlah data

            // 🔹 Hitung total lead untuk pagination
            const totalLeads = await Lead.countDocuments(filter);

            return successResponse(res, { leads, totalLeads }, "Leads fetched successfully");
        } catch (error) {
            return errorResponse(res, "Server error: " + error.message, 500);
        }
    }


    // Update Lead
    static async updateLead(req, res) {
        try {
            const { id } = req.params;
            const { name, email, status } = req.body;

            // Validation input
            if (!name || !email || !status) {
                return errorResponse(res, "All fields are required", 400);
            }
            if (!validator.isEmail(email)) {
                return errorResponse(res, "Invalid email format", 400);
            }

            // Check exists
            const lead = await Lead.findById(id);
            if (!lead) {
                return errorResponse(res, "Lead not found", 404);
            }

            // Check email
            const existingLead = await Lead.findOne({ email, _id: { $ne: id } });
            if (existingLead) {
                return errorResponse(res, "Email already exists", 400);
            }

            // Update data lead
            lead.name = name;
            lead.email = email;
            lead.status = status;
            await lead.save();

            return successResponse(res, lead, "Lead updated successfully");
        } catch (error) {
            return errorResponse(res, "Server error: " + error.message, 500);
        }
    }

}

module.exports = LeadController;
