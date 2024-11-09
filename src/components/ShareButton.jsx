import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { sendEmail } from "../utils/functions";

const ShareButton = ({ isOpen, onOpenChange }) => {
	const [emailDetails, setEmailDetails] = useState({});

	const handleSubmit = (onClose) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailDetails.name || !emailDetails.email || !emailDetails.message || !emailRegex.test(emailDetails.email)) {
			toast.error('Please provide valid informations.');
			return;
		}
		sendEmail(emailDetails);
		toast.success('Email sent successfully.');
		onClose();
	}

	return (
		<>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="center"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Get In Touch</ModalHeader>
							<ModalBody>
								<Input
									autoFocus
									label="Name"
									isRequired
									variant="bordered"
									radius="sm"
									defaultValue={emailDetails.name}
									onValueChange={(e) => setEmailDetails({ ...emailDetails, name: e })}
								/>
								<Input
									label="Email"
									type="email"
									isRequired
									variant="bordered"
									radius="sm"
									defaultValue={emailDetails.email}
									onValueChange={(e) => setEmailDetails({ ...emailDetails, email: e })}
								/>
								<Textarea
									label="Message"
									minRows={4}
									isRequired
									variant="bordered"
									radius="sm"
									defaultValue={emailDetails.message}
									onValueChange={(e) => setEmailDetails({ ...emailDetails, message: e })}
								/>
							</ModalBody>
							<ModalFooter>
								<button
									className="text-sm bg-neutral-800 text-white py-2 px-6 rounded-lg hover:bg-neutral-700 transition-all duration-200"
									onClick={() => handleSubmit(onClose)}
								>
									Submit
								</button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

export default ShareButton