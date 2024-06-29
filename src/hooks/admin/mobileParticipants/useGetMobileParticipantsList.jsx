import { useQuery } from "react-query";
import axios from "axios";

const unitxtToken = import.meta.env.VITE_UNITXT_TOKEN;

const getMobileParticipantsList = async () => {
    try {
        const response = await axios.get('https://unitxt.co.tz/api/http/sms', {
            headers: {
                'Authorization': `Bearer ${unitxtToken}`
            }
        });
        return response.data;
    } catch (err) {
        console.error("Failed to get Mobile Participants List:", err);
        throw new Error("Failed to get Mobile Participants List");
    }
}

export default function useGetMobileParticipantsList() {
    return useQuery(["get_mobile_participants"], getMobileParticipantsList);
}