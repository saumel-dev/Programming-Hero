'use client'
import { addNewTask } from "@/lib/actions";
import { Input, Label, TextField, Select, ListBox, Button, Form, FieldError } from "@heroui/react";


const NewTask = () => {
    return (
        <div>
            <h2 className="text-5xl">Add a new Task</h2>
            <Form action={addNewTask} className="flex flex-col gap-4">
                <TextField  required minLength={8}
                validate={(value) => {
                    if(value < 8)
                    {
                        return 'please input a valid task'
                    }
                }} className="w-full" name="title" type="text">
                    <Label>Task Title</Label>
                    <Input placeholder="Enter your Task name" />
                    <FieldError></FieldError>
                </TextField>
                <TextField className="w-full" name="description" type="text">
                    <Label>Description</Label>
                    <Input placeholder="Enter your Task description" />
                </TextField>
                <Select name="priority" className="w-[256px]" placeholder="Select one">
                    <Label>Priority</Label>
                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item className="text-gray-300" id="low" textValue="low">
                                Low
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item className="text-yellow-300" id="medium" textValue="medium">
                                Medium
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item className="text-red-300" id="high" textValue="high">
                                High
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>
                <Select name="status" className="w-[256px]" placeholder="Select one">
                    <Label>Status</Label>
                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="pending" textValue="pending">
                                Pending
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="onProgress" textValue="onProgress">
                                On Progress
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="completed" textValue="completed">
                                Completed
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>
                <TextField className="w-full" name="assignTo" type="text">
                    <Label>Assign TO</Label>
                    <Input placeholder="Task Assigned To" />
                </TextField>
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button slot="close" type="submit">Submit Task</Button>
            </Form>
        </div>
    );
};

export default NewTask;